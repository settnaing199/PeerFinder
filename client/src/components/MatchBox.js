import React from "react"
import { Link } from "react-router-dom"

export default function MatchBox(props) {
    const { id, name, college, major, courses, pic } = props

    return (
        <div className="card">
            <div className="content">
                <img className="right floated mini ui image" alt="avatar" src={pic} />
                <div className="header">{name}</div>
                <div className="meta">{college}</div>
                <div className="meta">{major}</div>

<<<<<<< HEAD
                {courses?.map(course => (
                    <div key="course" className="ui small label">
=======
                {courses?.map((course, index) => (
                    <div key={index} className="ui small label">
>>>>>>> d7c799bd012ef24224cc4c32d838e299405f2e45
                        {course}
                    </div>
                ))}
            </div>
            <Link to={`/profile/${id}`}>
                <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    <span style={{ color: "blue" }}>View Profile</span>
                </div>
            </Link>
        </div>
    )
}
