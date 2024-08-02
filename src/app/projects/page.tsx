import { redirect } from "next/navigation";

const ProjectsDefaultPage = () => {
  // ページ番号1にリダイレクト
  redirect("/projects/1");
};

export default ProjectsDefaultPage;
