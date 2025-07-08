const CustomH1 = ({ node, ...props }) => (
  <h1
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12"
    {...props}
  />
);

const CustomH2 = ({ node, ...props }) => (
  <h2
    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10"
    {...props}
  />
);

const CustomH3 = ({ node, ...props }) => (
  <h3
    className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8"
    {...props}
  />
);

const CustomH4 = ({ node, ...props }) => (
  <h4
    className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 md:mb-6"
    {...props}
  />
);

const CustomH5 = ({ node, ...props }) => (
  <h5
    className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 md:mb-4"
    {...props}
  />
);

export {CustomH1, CustomH2, CustomH3, CustomH4, CustomH5}