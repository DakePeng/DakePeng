export default function LicenseBadge({ licenseUrl, badgeUrl, className = "" }) {
  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      <a
        href={licenseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:underline"
      >
        <img
          src={badgeUrl}
          alt="MIT License"
          className="h-6"
        />
        Licensed under MIT License
      </a>
    </div>
  );
}