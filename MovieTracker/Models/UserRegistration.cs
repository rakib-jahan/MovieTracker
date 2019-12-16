using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MovieTracker.Models
{
    public class UserRegistration
    {
        public int Id { get; set; }

        [DataType(DataType.EmailAddress)]
        [DisplayName("Email")]
        [Required]
        public string UserName { get; set; }

        [DisplayName("Full Name")]
        [Required]
        public string UserFullName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DisplayName("Confirm Password")]
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}