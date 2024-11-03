import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  projectThumb,
  projectSubTilte,
  projectTitle,
  projectUrl,
  projectBtn,
}) => {
  return (
    <div>
      <div className="project-box relative z-10 group">
        <div className="rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
          <Image alt="Project Image" src={projectThumb} draggable={false} className="w-full" />
        </div>
        <div className="rounded-md shadow-shade absolute z-10 w-10/12 left-1/2 -translate-x-1/2 -bottom-[50px] bg-white xl:w-9/12 border-PrimaryColor-0">
          <div className="relative px-9 py-6">
            <h6 className="font-Rajdhani font-medium text-lg text-PrimaryColor-0 my-1">
              {projectSubTilte}
            </h6>
            <Link href={projectUrl}>
              <button className="font-Rajdhani font-semibold text-xl lg:text-lg xl:text-[22px] text-HeadingColor-0 text-left">
                {projectTitle}
              </button>
            </Link>
            <Link
              href={projectUrl}
              className="project-btn transition-all duration-500 absolute right-1/2 top-1/2 -translate-y-1/2 opacity-0 group-hover:-right-[25px] group-hover:opacity-100"
            >
              <button className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white bg-PrimaryColor-0">
                {projectBtn}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
