import { useParams } from 'react-router-dom';

export const ProjectDetail = () => {
  const { projectId } = useParams();
  return <h1>Project Detail: {projectId}</h1>;
};
