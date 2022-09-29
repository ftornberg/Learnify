using System;

namespace Entity
{
  public class UpdateLectureDto
  {
    public int LectureId { get; set; }
    public Guid CourseId { get; set; }
  }
}