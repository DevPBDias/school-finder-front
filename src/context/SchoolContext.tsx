import { ReactNode, createContext, useMemo, useState } from "react";

interface SchoolProviderProps {
    children: ReactNode,
}

interface ISchoolContextType {
    schools: any,
}

export const SchoolContext = createContext({} as ISchoolContextType);

export default function SchoolsProvider({ children }: SchoolProviderProps) {
    const [schools, setShools] = useState<any>([]);


  
    
    const contextValue = {
      schools,
    };
  
    const contextMemo = useMemo(() => (contextValue), [
      schools,
    ]);
  
    return (
      <SchoolContext.Provider value={contextMemo}>
        {children}
      </SchoolContext.Provider>
    );
  }