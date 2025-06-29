export default function Map_section() {
  return (
    <div className='mx-6'>
      <div className='h-96 w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.6009227419795!2d87.9116643!3d24.6374359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa43bdaa635aa1%3A0x9b9683df0bafa075!2sPeaceLibrary!5e0!3m2!1sen!2sbd!4v1751171538600!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peace Library Location"
        ></iframe>
      </div>
    </div>
  );
}