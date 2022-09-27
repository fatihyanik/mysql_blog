import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https" alt="" />
        <div className="user">
          <img src="https" alt="" />
          <div className="info">
            <span>Fatih</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          facere quas minus nulla fugit consectetur quibusdam tempore
          cupiditate, cum asperiores.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ipsam eligendi expedita itaque vel delectus accusantium quisquam qui,
          debitis aspernatur, tenetur nihil sequi ex nobis ab suscipit, quaerat
          cumque aliquid rem maiores aliquam magni molestias inventore. Id
          facere dignissimos nostrum omnis maxime similique, voluptatibus
          eligendi qui distinctio quaerat aspernatur neque totam tenetur laborum
          excepturi? Dignissimos hic a perferendis debitis sapiente tenetur,
          adipisci dolorem, earum tempora voluptatum, eaque rerum pariatur ullam
          facilis exercitationem! Atque suscipit unde eius porro quia sequi
          minima corrupti perferendis eaque ipsum magnam possimus, mollitia,
          placeat officia repellendus perspiciatis provident itaque sed
          consequatur beatae sit voluptas consectetur a facilis? Officia
          provident vitae, nostrum doloribus neque, ad consequatur repellendus
          dolorum aliquam in, commodi tempora? At aliquid ullam, fugit dolores
          vel ipsam quas nobis minus fuga, omnis nihil! Velit consequuntur esse
          ducimus ipsum, accusantium harum quibusdam minima fuga. Sit saepe,
          natus quam ab voluptatum nulla voluptates, fuga cupiditate optio harum
          quidem odit ex id nostrum omnis corrupti nihil iusto? Provident odio
          non, dolore alias culpa iste ut eum nulla hic doloremque, animi a
          illum ex sunt fuga, ullam incidunt quas sapiente impedit maxime
          officiis facilis labore optio! Nam aut impedit recusandae aspernatur
          inventore facilis, fuga iusto, commodi rem sit est?
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
