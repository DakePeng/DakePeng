const CustomList = ({ node, ...props }) => (
  <ul className="list-disc list-inside mb-6 max-w-3xl mx-auto" {...props} />
);

const CustomListItem = ({ node, ...props }) => (
  <li className="mb-2" {...props} />
);

export {CustomList, CustomListItem};
