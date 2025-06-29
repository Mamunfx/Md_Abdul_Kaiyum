import { services } from "../../Data/services";
export const Services = () => {
  const services_data = services;
  return (
    <div className="space-y-14 w-11/12 mx-auto">
      <h1 className="text-center text-2xl font-bold">আমাদের সেবা সমূহ</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services_data.map((service, i) => (
          <>
            <div
              key={i}
              className="card  bg-base-100 card-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="card-body ">
                <div className="flex flex-col gap-3 justify-center items-center mb-2">
                  <img
                    src={service.img_src}
                    alt="card_img"
                    className="w-14 rounded-full"
                  />
                  <h2 className="card-title">{service.name}</h2>
                </div>

                <p className="text-sm">
                  {service.details.split(" ").slice(0, 5).join(" ") + "......."}
                </p>
                <div className="justify-start card-actions">
                  <button
                    className="btn btn-ghost text-primary text-lg px-0 "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </>
        ))}
      </div>
    </div>
  );
};
