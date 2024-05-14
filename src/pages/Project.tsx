import React, { useState } from 'react';

import Pagination from '../components/Pagination';
import { USER_TOKEN_NAME } from '../constants';
import { columns } from '../constants/columns';
import { useCreateProject } from '../hooks/useCreateProject';
import { useGetProjects } from '../hooks/useGetProjects';
import { useNavigate } from 'react-router-dom';

export type SortOption = 'name' | 'numberOfImages' | 'created';
export type OrderOption = 'asc' | 'desc';
export interface ProjectsOrder {
  sort: SortOption;
  order: OrderOption;
}

export const Project = () => {
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 1,
    offset: 0,
  });
  const [sortOption, setSortOptions] = useState<ProjectsOrder>({
    sort: 'created',
    order: 'desc',
  });
  const [targetProject, setTargetProject] = useState<number | null>(null);

  const navigate = useNavigate();
  const { data, isLoading } = useGetProjects({
    pagination,
    sortOption,
  });
  const { createProject, createProjectLoading } = useCreateProject();

  const handleCreateProject = () => {
    const projectName = prompt(
      '생성할 프로젝트의 이름을 입력하세요 (ontologyId: 34956166) : ',
      '',
    );
    if (projectName) {
      createProject({ name: projectName, ontologyId: 34956166 });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_TOKEN_NAME);
    navigate('/login');
  };

  return (
    <div style={{ paddingInline: 50 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Project page</h1>
          <div style={{ alignContent: 'center' }}>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
                height: '50px',
              }}
              onClick={handleCreateProject}
            >
              프로젝트 생성
            </button>
          </div>
        </div>

        {isLoading && createProjectLoading && <h1>Loading...</h1>}

        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            marginTop: '30px',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd', padding: 10 }}>
              {columns.map((column, idx) => (
                <th key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {column}
                    {column &&
                      (['asc', 'desc'] as OrderOption[]).map((od) => {
                        return (
                          <button
                            key={od}
                            onClick={() =>
                              setSortOptions({ sort: column, order: od })
                            }
                          >
                            {od}
                          </button>
                        );
                      })}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.collection.map((x, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <button onClick={() => setTargetProject(x.id)}>open</button>
                    <button onClick={() => setTargetProject(null)}>
                      close
                    </button>
                  </td>
                  <td
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate(`/project/${x.id}`)}
                  >
                    {x.name}
                  </td>
                  <td style={{ textAlign: 'center' }}>{x.numberOfImages}</td>
                  <td style={{ textAlign: 'center' }}>{x.created}</td>
                </tr>
                {x.id === targetProject && (
                  <tr>
                    <td
                      colSpan={4}
                      style={{
                        backgroundColor: 'lightsteelblue',
                        padding: '10px',
                      }}
                    >
                      <table
                        style={{ width: '100%', borderCollapse: 'collapse' }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: 'bold', padding: '5px' }}>
                              ID:
                            </td>
                            <td style={{ padding: '5px' }}>{x.id}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: 'bold', padding: '5px' }}>
                              Annotations:
                            </td>
                            <td style={{ padding: '5px' }}>
                              {x.numberOfAnnotations}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: 'bold', padding: '5px' }}>
                              Slides:
                            </td>
                            <td style={{ padding: '5px' }}>
                              {x.numberOfSlides}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: 'bold', padding: '5px' }}>
                              Ontology Name:
                            </td>
                            <td style={{ padding: '5px' }}>{x.ontologyName}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        totalCount={data?.size}
      />
      <div style={{ marginBottom: 20 }}>
        {[10, 15, 20].map((x) => {
          return (
            <button
              key={`size-${x}`}
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: 1,
                  pageSize: x,
                  offset: 0,
                }))
              }
              style={{ marginRight: 20 }}
            >{`${x}개씩 보기`}</button>
          );
        })}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
