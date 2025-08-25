import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type FetchFunction<T> = () => Promise<T[]>;

interface DataContextProps<T> {
    data: T[] | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

export function createDataContext<T>(fetchFunction: FetchFunction<T>) {
    const DataContext = createContext<DataContextProps<T> | undefined>(undefined);

    const DataProvider = ({ children }: { children: ReactNode }) => {
        const [data, setData] = useState<T[] | null>(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<Error | null>(null);

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        useEffect(() => {
            fetchData();
        }, []);

        return (
            <DataContext.Provider value={{ data, loading, error, refetch: fetchData }}>
                {children}
            </DataContext.Provider>
        );
    };

    const useData = () => {
        const context = useContext(DataContext);
        if (!context) {
            throw new Error("useData must be used within a DataProvider");
        }
        return context;
    };

    return { DataProvider, useData };
}