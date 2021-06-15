using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helper;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user); // just update tracking data, not interact with persistent database
        Task<AppUser> GetUserAsync(int id);
        Task<AppUser> GetUserAsync(string username);
        Task<MemberDto> GetMemberAsync(string username);
        Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams);

        Task<string> GetUserGender(string username);
    }
}