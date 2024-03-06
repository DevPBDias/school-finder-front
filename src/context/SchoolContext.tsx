import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { getSchoolsData } from "../data/schoolService";

interface SchoolProviderProps {
    children: ReactNode,
}

interface ISchool {
    id: string,
    name: string,
    city: string,
    type: string,
    image: string,
    neighborhood: string,
    phoneNumber: string,
    adress: string,
    about: string,
    schoolFeedback: any,
    educationType: any,
}

interface ISchoolContextType {
    schools: any | undefined,
}

export const SchoolContext = createContext({} as ISchoolContextType);

export default function SchoolsProvider({ children }: SchoolProviderProps) {
    const [schools, setSchools] = useState<any>([]);

    const getData = async () => {
        const {data} = await getSchoolsData()
        setSchools(data)
    }
    
    useEffect(() => {
        getData()
    }, [])

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