import { useState } from "react";
import "./newPost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts/", {
        title: inputs.title,
        price: Number(inputs.price),
        images: images,
        address: inputs.address,
        city: inputs.city,
        bedroom: Number(inputs.bedroom) || 1,
        bathroom: Number(inputs.bathroom) || 1,
        latitude: String(inputs.latitude || ""),
        longitude: String(inputs.longitude || ""),
        property: inputs.property,
        postDetail: {
          desc: value,
          utilities: inputs.utilities || null,
          pet: inputs.pet || null,
          income: inputs.income || null,
          size: inputs.size ? Number(inputs.size) : null,
          school: inputs.school ? Number(inputs.school) : null,
          bus: inputs.bus ? Number(inputs.bus) : null,
          restaurant: inputs.restaurant ? Number(inputs.restaurant) : null,
        },
      });

      navigate("/" + res.data.id);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>

        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>

            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>

            <div className="item description">
              <label>Description</label>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>

            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input id="bedroom" name="bedroom" type="number" min={1} />
            </div>

            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input id="bathroom" name="bathroom" type="number" min={1} />
            </div>

            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="number" step="any" />
            </div>

            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="number" step="any" />
            </div>

            <div className="item">
              <label htmlFor="property">Property</label>
              <select id="property" name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select id="utilities" name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select id="pet" name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input id="income" name="income" type="text" />
            </div>

            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input id="size" name="size" type="number" min={0} />
            </div>

            <div className="item">
              <label htmlFor="school">School</label>
              <input id="school" name="school" type="number" min={0} />
            </div>

            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input id="bus" name="bus" type="number" min={0} />
            </div>

            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input id="restaurant" name="restaurant" type="number" min={0} />
            </div>

            <button className="sendButton" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </button>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>

      <div className="sideContainer">
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPost;
