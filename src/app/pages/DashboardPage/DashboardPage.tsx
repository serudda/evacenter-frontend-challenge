/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import * as appConstants from '@constants/appConstants';
import { PreviewData, StatsData } from '@interfaces/data';
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
  const { fetchData } = useLazyApi<StatsData>(appConstants.DATA_URL as string);
  const { fetchData: fetchImage } = useLazyApi<File>(appConstants.IMAGE_URL as string, RequestType.blob);
  const { create, getAll } = useFirebase('previews');
  const [{ fileData }, , setFileToUpload] = useFileUpload('images/test/');
  const [statsData, setStatsData] = useState<StatsData>();
  const [previewData, setPreviewData] = useState<Array<PreviewData>>([]);

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
    setPreviewData(previewData as Array<PreviewData>);
  };

  useEffect(() => {
    if (fileData) {
      saveData(fileData).then(async (response) => {
        if (response !== CreateResponse.ok) return;
        getPreviews();
      });
    }
  }, [fileData]);

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
    const newStatsData = await fetchData();
    const imageData = await fetchImage();
    if (imageData) uploadFile(imageData);
    setStatsData(newStatsData);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={dashboardPageClass}>
      <StatsSection stats={statsData} className="mb-5" />

      <div className="flex space-x-5">
        <div className="w-1/2">
          <HistorySection list={previewData} />
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
