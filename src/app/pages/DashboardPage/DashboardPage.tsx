/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import * as appConstants from '@constants/appConstants';
import { PreviewData } from '@interfaces/data';
import { formatDate } from '@utils/utils';
import useFileUpload, { UploadDataResponse } from '@hooks/useFileUpload';
import useLazyApi, { RequestType } from '@hooks/useLazyApi';
import useFirebase, { Status as RequestStatus } from '@hooks/useFirebase';
import FloatingMenu from '@atoms/FloatingMenu/FloatingMenu';
import HistorySection from './HistorySection/HistorySection';
import PreviewSection from './PreviewSection/PreviewSection';
import StatsSection from './StatsSection/StatsSection';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const DashboardPage: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const { fetchData: fetchImage, loading: loadingImage } = useLazyApi<File>(
    appConstants.IMAGE_URL as string,
    RequestType.blob,
  );
  const { create, getAll, loading: loadingGetAllPreviews } = useFirebase('previews');
  const [{ fileData, loading: uploading }, , setFileToUpload] = useFileUpload('images/previews/');
  const [previewList, setPreviewList] = useState<Array<PreviewData>>([]);
  const [previewImage, setPreviewImage] = useState<{ name: string; imageUrl: string }>();
  const [defaultSelectedItem, setDefaultSelectedItem] = useState<PreviewData>();

  const uploadFile = (fileData: File) => {
    setFileToUpload(fileData);
  };

  const saveData = async (file: UploadDataResponse) => {
    const data = {
      name: file.metaData.name,
      imageUrl: file.downloadUrl,
    };
    return await create(data);
  };

  const buildPreviewList = async () => {
    const previewListData = await getAll();
    setPreviewList(previewListData as Array<PreviewData>);
  };

  // Save data in Firebase after upload the preview images
  useEffect(() => {
    if (fileData) {
      saveData(fileData).then(async (response) => {
        if (response.status !== RequestStatus.ok) return;
        buildPreviewList();
        setPreviewImage({ name: fileData.metaData.name, imageUrl: fileData.downloadUrl });
        setDefaultSelectedItem(response.data as PreviewData);
      });
    }
  }, [fileData]);

  // Build Preview list
  useEffect(() => {
    buildPreviewList();
  }, []);

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const dashboardPageClass = cn('dashboard-page max-w-7xl p-6 mx-auto', className);

  /*--------------------------*/
  /*          HANDLES         */
  /*--------------------------*/
  const handleTakePictureBtnClick = async () => {
    const imageData = await fetchImage();
    if (imageData) uploadFile(imageData);
  };

  const handleSelectItem = (item: PreviewData) => {
    setPreviewImage({ name: item.name, imageUrl: item.imageUrl });
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={dashboardPageClass}>
      <StatsSection className="mb-5" />

      <div className="flex space-x-5">
        <div className="w-1/2">
          <HistorySection
            list={previewList}
            loading={loadingGetAllPreviews}
            onSelectItem={handleSelectItem}
            defaultSelectedItem={defaultSelectedItem}
          />
        </div>

        <div className="w-1/2">
          <PreviewSection
            loading={uploading}
            imageUrl={previewImage?.imageUrl}
            imageName={formatDate(previewImage?.name)}
          />
        </div>
      </div>

      <FloatingMenu
        className="fixed bottom-0 right-0 mb-4 mr-4 lg:mb-8 lg:mr-8"
        onClick={handleTakePictureBtnClick}
        loading={loadingImage}
      />
    </div>
  );
};

export default DashboardPage;
