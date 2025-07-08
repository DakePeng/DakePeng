import { Github } from "lucide-react";

export default function GitHubLink({ url, className = "" }) {
  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex px-4 py-2 text-sm mt-6 font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
        aria-label="View source code on GitHub"
      >
        <Github className="w-5 h-5 mr-2" />
        View Source on GitHub
      </a>
    </div>
  );
}