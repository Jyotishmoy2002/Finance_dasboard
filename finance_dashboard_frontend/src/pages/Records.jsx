import MainLayout from "../layouts/MainLayout";
import RecordList from "../features/records/RecordList";
import RecordForm from "../features/records/RecordForm";

const Records = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <RecordForm />
        <RecordList />
      </div>
    </MainLayout>
  );
};

export default Records;