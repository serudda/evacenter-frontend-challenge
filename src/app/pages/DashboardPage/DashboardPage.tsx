/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import * as appConstants from '@constants/appConstants';
import { PreviewData } from '@interfaces/data';
import useFileUpload, { UploadDataResponse } from '@hooks/useFileUpload';
import useLazyApi, { RequestType } from '@hooks/useLazyApi';
import useFirebase, { CreateResponse } from '@hooks/useFirebase';
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
  const { fetchData: fetchImage } = useLazyApi<File>(appConstants.IMAGE_URL as string, RequestType.blob);
  const { create, getAll } = useFirebase('previews');
  const [{ fileData }, , setFileToUpload] = useFileUpload('images/previews/');
  const [historyData, setHistoryData] = useState<Array<PreviewData>>([]);
  const [loading, setLoading] = useState(true);

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

  const getPreviews = async () => {
    const previewData = await getAll();
    setHistoryData(previewData as Array<PreviewData>);
    setLoading(false);
  };

  // Save data in Firebase after upload the preview images
  useEffect(() => {
    if (fileData) {
      saveData(fileData).then(async (response) => {
        if (response !== CreateResponse.ok) return;
        getPreviews();
      });
    }
  }, [fileData]);

  // Get Preview data to build History list
  useEffect(() => {
    getPreviews();
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

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={dashboardPageClass}>
      <StatsSection className="mb-5" />

      <div className="flex space-x-5">
        <div className="w-1/2">
          <HistorySection list={historyData} loading={loading} />
        </div>

        <div className="w-1/2">
          <PreviewSection />
        </div>
      </div>

      <FloatingMenu className="fixed bottom-0 right-0 mb-4 mr-4 lg:mb-8 lg:mr-8" onClick={handleTakePictureBtnClick} />
    </div>
  );
};

export default DashboardPage;
