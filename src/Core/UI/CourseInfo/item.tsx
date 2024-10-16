type TProps = {
  label?: string;
  value?: string | number;
};

const CourseInfoItem = ({ label, value }: TProps) => {
  return (
    <div className="flex items-center justify-between py-3.8 border-t border-t-gray-500 first:border-0">
      <h6 className="mb-0">{label}</h6>
      {value == "Ücretsiz" ? (
        <span className="text-right text-red-600 font-semibold">{value}</span>
      ) : (
        <span className="text-right">{value}</span>
      )}
    </div>
  );
};

export default CourseInfoItem;
