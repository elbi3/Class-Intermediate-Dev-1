import "./UserProfile.css";

export default function UserProfile({ name, email, pic }){

    return (
        <div className="profile-card">
            <h2>User Profile</h2>
            <img src={pic} alt="User Photo" className="photo"/>
            <p>Name: {name}</p>
            <p>Email: <span className="email">{email}</span></p>
            <a href="mailto:jane.doe@example.com">Send Email</a>
        </div>
    );
};
