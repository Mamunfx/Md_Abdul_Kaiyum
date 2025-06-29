export const Message_us = () => {
  return (
    <div className="mx-4 md:mx-8 my-8 space-y-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold">অনুসন্ধান করুন</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
            alt="Message_us_gif"
            className=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="card bg-base-100 w-full shadow-xl border">
            <div className="card-body space-y-6">
              <h2 className="text-center text-xl font-semibold">মেসেজ পাঠান</h2>
              <form className="space-y-10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="label">
                      নামঃ
                      <span className="text-red-500 text-lg font-semibold ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="নাম"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="label">
                      নাম্বারঃ
                      <span className="text-red-500 text-lg font-semibold ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full"
                      placeholder="নাম্বার"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="label">ইমেইলঃ</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="আপনার ইমেইল"
                  />
                </div>
                <div>
                  <label className="label">
                    মেসেজঃ <span className="text-red-500 text-lg font-semibold">*</span>
                  </label>
                  <textarea
                    name="মেসেজ"
                    className="input input-bordered w-full min-h-20 resize-y"
                    placeholder="আপনার মেসেজ"
                    required
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="btn btn-primary text-xs "
                  >
                    মেসেজ পাঠান
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};