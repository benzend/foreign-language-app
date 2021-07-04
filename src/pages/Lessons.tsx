import { Nav } from "../components/Nav";
import { ILesson } from "../interfaces/ILesson";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { Link } from "react-router-dom";

interface ILessonsProps {
  targetLang: string | null | undefined;
  lessons: ILesson[] | null | undefined;
}

export const Lessons = ({ targetLang, lessons }: ILessonsProps) => {
  console.log(lessons);
  return (
    <div>
      <Nav />
      <PageHeaderLayout>
        <PageTitleLayout>{targetLang} lessons</PageTitleLayout>
      </PageHeaderLayout>
      {lessons ? (
        <>
          {lessons.map((lesson, i) => (
            <Link key={lesson.id} to={`/${targetLang}/lessons/${lesson.id}`}>
              Lesson {i}
            </Link>
          ))}
        </>
      ) : (
        <h3>There Are No Lessons</h3>
      )}
    </div>
  );
};
