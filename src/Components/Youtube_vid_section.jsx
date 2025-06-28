export const Youtube_vid_section = () => {
  const Youtube_Vid_Links = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/vMc7euF67lg",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/pj_bVgANAxg",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/VW97dpklud4",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/J6lpzQyEeSA",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/EF7MDeZbS84",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/hOcppdlW6DM",
    },
  ];
  return (
    <div className="space-y-14 w-11/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {Youtube_Vid_Links.map((vid, i) => (
          <iframe title="youtube_videos" src={vid.src} className="w-full h-80 rounded-md"></iframe>
        ))}
      </div>
    </div>
  );
};
