/* --- DEPENDENCIES --- */
import React, { useContext, useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
/* -------------------- */

/*----------------------*/
/*  PROVIDER INTERFACE  */
/*----------------------*/
export interface TabsContext {
  activeTab: string;
  changeTab: React.Dispatch<any>;
}

/*----------------------*/
/*  CONTEXT DEFINITION  */
/*----------------------*/
export const TabsContext = createContext<TabsContext>({} as TabsContext);

/*-----------------------*/
/*  PROVIDER DEFINITION  */
/*-----------------------*/
export const TabsProvider = ({ defaultSelected, className, children, ...restProps }): JSX.Element => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [activeTab, setChangeTab] = useState<string>(defaultSelected);
  const location = useLocation();
  const tabsContainerClass = cn(className);

  /* METHODS DEFINITIONS */
  const changeTab = (tab: string): void => setChangeTab(tab);

  /* Reset Tabs when current location changes */
  useEffect(() => {
    changeTab(defaultSelected);
  }, [location.pathname]);

  useEffect(() => {
    changeTab(defaultSelected);
  }, [defaultSelected]);

  /* GROUP VALUES */
  const tabProviderValue = {
    activeTab,
    changeTab,
  };

  /* RENDER PROVIDER */
  return (
    <TabsContext.Provider value={tabProviderValue}>
      <div className={tabsContainerClass} {...restProps}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/*-----------------------*/
/*   EXPORT USE METHOD   */
/*-----------------------*/
export const useTabs = (): TabsContext => {
  return useContext(TabsContext);
};
