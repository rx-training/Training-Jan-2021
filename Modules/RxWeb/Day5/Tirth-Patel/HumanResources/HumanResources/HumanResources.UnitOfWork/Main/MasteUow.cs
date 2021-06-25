using RxWeb.Core.Data;
using HumanResources.BoundedContext.Main;

namespace HumanResources.UnitOfWork.Main
{
    public class MasteUow : BaseUow, IMasteUow
    {
        public MasteUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasteUow : ICoreUnitOfWork { }
}


