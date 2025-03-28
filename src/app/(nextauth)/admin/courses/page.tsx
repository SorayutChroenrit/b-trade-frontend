import AdminCourses from "@/components/course/CourseManagement";
import { Separator } from "@/components/ui/separator";

export default function AdminCoursesPage() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">
              Course Management
            </h2>
            <p className="text-sm text-muted-foreground">
              Create, update, and organize your course content
            </p>
          </div>
        </div>
        <Separator className="my-2" />
      </div>
      <AdminCourses />
    </div>
  );
}
