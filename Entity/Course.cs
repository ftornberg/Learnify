using System;
using System.Collections.Generic;

namespace Entity
{
  public class Course : BaseEntity
  {
    public string Title { get; set; }
    public string Language { get; set; }
    public string Level { get; set; }
    public string SubTitle { get; set; }
    public int Students { get; set; }
    public DateTime LastUpdated { get; set; } = DateTime.Now;
    public string Description { get; set; }
    public float Price { get; set; }
    public string Instructor { get; set; }
    public string Image { get; set; }
    public decimal Rating { get; set; }
    public ICollection<Requirement> Requirements { get; set; } = new List<Requirement>();
    public ICollection<Learning> Learnings { get; set; } = new List<Learning>();
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public ICollection<UserCourse> UserCourses { get; set; }
    public ICollection<Section> Sections { get; set; }
  }
}