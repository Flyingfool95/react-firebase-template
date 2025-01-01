export default function useGetDocuments() {
    interface IGetDocumentsParams {
        collection: string;
        ids: string[];
    }

    const getDocuments = async (getDocumentsParams: IGetDocumentsParams) => {
        try {
        } catch (error) {}
    };

    return {
        getDocuments,
    };
}
