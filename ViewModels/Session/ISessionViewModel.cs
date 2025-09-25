
using BaseApp.ViewModels;
using System.ComponentModel;

namespace ViewModels;

public interface ISessionViewModel : IBaseAppSessionViewModel
{
    public string TenantName { get; set; }
}