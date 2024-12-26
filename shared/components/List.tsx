export default function List() {
  const navOptions = [
    {
      name: "Web Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Graphic Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Illustration",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Motion Graphics",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "3D Animation",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Cinematic 4D",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Share Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
  ];
  const img =
    "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80";
  return (
    <ul className="honeycomb">
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">Web Design</div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">Graphic Design</div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">Illustration</div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">Motion Graphics</div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">
          3D<small>Animation</small>
        </div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">
          Cinematic<small>4D</small>
        </div>
      </li>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={img} />
        <div className="honeycomb-cell_title">Share Design</div>
      </li>
      <li className="honeycomb-cell honeycomb_Hidden"></li>
    </ul>
  );
}
