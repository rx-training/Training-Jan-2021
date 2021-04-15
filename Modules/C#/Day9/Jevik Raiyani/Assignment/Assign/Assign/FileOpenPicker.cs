using System;
using System.Threading.Tasks;

namespace Assign
{
    internal class FileOpenPicker
    {
        public FileOpenPicker()
        {
        }

        public object SuggestedStartLocation { get; internal set; }
        public object FileTypeFilter { get; internal set; }

        internal Task<StorageFile> PickSingleFileAsync()
        {
            throw new NotImplementedException();
        }
    }
}