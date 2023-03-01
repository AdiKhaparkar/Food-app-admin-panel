import React, { useState } from "react";
import "./AddFoodData.css";

import { db, storage } from "../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Navbar from "./Navbar/Navbar";

const AddFoodData = () => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [foodCategory, setFoodCategory] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  // const [restaurantAddress, setRestaurantAddress] = useState("");

  const [foodImageUrl, setFoodImageUrl] = useState("");
  const [mealType, setMealType] = useState("");
  const [foodType, setFoodType] = useState("");
  const [foodAddon, setFoodAddon] = useState("");
  const [foodAddonPrice, setFoodAddonPrice] = useState("");

  const [restaurantPhone, setRestaurantPhone] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantAddressBuilding, setRestaurantAddressBuilding] =
    useState("");
  const [restaurantAddressStreet, setRestaurantAddressStreet] = useState("");
  const [restaurantAddressCity, setRestaurantAddressCity] = useState("");
  const [restaurantAddressPincode, setRestaurantAddressPincode] = useState("");

  //   console.log(
  // foodName,
  // foodPrice,
  // foodImage,
  // foodCategory,
  // foodDescription,
  // restaurantName,
  // restaurantAddress,
  // restaurantPhone,
  // foodImageUrl
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodImage == null) {
      alert("Please select an image");
      return;
    } else {
      const imageRef = ref(storage, `FoodImages/${foodImage.name}`);
      uploadBytes(imageRef, foodImage)
        .then(() => {
          alert("Image has been Uploaded Successfully");
          getDownloadURL(imageRef).then((url) => {
            setFoodImageUrl(url);
            const foodData = {
              foodName,
              foodPrice,
              foodImageUrl: url,
              foodCategory,
              foodDescription,
              restaurantName,
              // restaurantAddress,
              restaurantPhone,
              mealType,
              foodType,
              foodAddon,
              foodAddonPrice,
              restaurantEmail,
              restaurantAddressBuilding,
              restaurantAddressStreet,
              restaurantAddressCity,
              restaurantAddressPincode,
              id: new Date().getTime().toString(),
            };
            console.log(foodData);

            try {
              const docRef = addDoc(collection(db, "FoodData"), foodData);
              console.log("Data added Successfully", docRef.id);
            } catch (error) {
              alert("Error adding document", error);
            }
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  // fetch("http://localhost:5000/addFoodData", {
  //   method: "POST",
  //   header: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(foodData),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <div>
      <Navbar />
      <div className="form-outer">
        <h1>Add Food Data</h1>
        <form className="form-inner">
          <label>Food Name</label>
          <input
            type="text"
            name="food_Name"
            onChange={(e) => {
              setFoodName(e.target.value);
            }}
          />
          <br />
          <div className="form-row">
            <div className="form-col">
              <label>Food Price</label>
              <input
                type="number"
                name="food_price"
                onChange={(e) => {
                  setFoodPrice(e.target.value);
                }}
              />
            </div>

            <div className="form-col">
              <label>Food Type</label>
              <select
                name="food_type"
                onChange={(e) => {
                  setFoodType(e.target.value);
                }}
              >
                <option value={"null"}>Select Food Type</option>
                <option value={"veg"}>Veg</option>
                <option value={"non-veg"}>Non-Veg</option>
              </select>
            </div>
          </div>
          <br />

          <div className="form-row">
            <div className="form-col">
              <label>Food Category</label>
              <select
                name="food_category"
                onChange={(e) => {
                  setFoodCategory(e.target.value);
                }}
              >
                <option value="null">Select Food Category</option>
                <option value="indian">Indian</option>
                <option value="chineese">Chineese</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="american">American</option>
              </select>
            </div>

            <div className="form-col">
              <label>Meal Type</label>
              <select
                name="meal_type"
                onChange={(e) => {
                  setMealType(e.target.value);
                }}
              >
                <option value="null">Select Meal Type</option>
                <option value="dinner">Dinner</option>
                <option value="starters">Dtarters</option>
                <option value="breakfast">Breakfast</option>
                <option value="liquid">Liquid</option>
              </select>
            </div>
          </div>
          <br />

          <div class="form-row">
            <div class="form-col">
              <label>Add on Name</label>
              <input
                type="text"
                name="food_addon"
                onChange={(e) => {
                  setFoodAddon(e.target.value);
                }}
              />
            </div>
            <div class="form-col">
              <label>Add on Price</label>
              <input
                type="text"
                name="food_addon_price"
                onChange={(e) => {
                  setFoodAddonPrice(e.target.value);
                }}
              />
            </div>
          </div>

          <label>Food Image</label>
          <input
            type="file"
            name="food_image"
            onChange={(e) => {
              setFoodImage(e.target.files[0]);
            }}
          />
          <br />
          <label>food Category</label>
          <input
            type="text"
            name="food_category"
            onChange={(e) => {
              setFoodCategory(e.target.value);
            }}
          />
          <br />
          <label>food Description</label>
          <input
            type="text"
            name="food_description"
            onChange={(e) => {
              setFoodDescription(e.target.value);
            }}
          />
          <br />

          <label>Restaurant Name</label>
          <input
            type="text"
            name="restaurant_name"
            onChange={(e) => {
              setRestaurantName(e.target.value);
            }}
          />
          <div class="form-row">
            <div class="form-col">
              <label>Restaurant Building Number/Name</label>
              <input
                type="text"
                name="restaurant_address_building"
                onChange={(e) => setRestaurantAddressBuilding(e.target.value)}
              />
            </div>
            <div class="form-col">
              <label>Restaurant Street / Area Name</label>
              <input
                type="text"
                name="restaurant_address_street"
                onChange={(e) => setRestaurantAddressStreet(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div class="form-row">
            <div class="form-col">
              <label>Restaurant City</label>
              <input
                type="text"
                name="restaurant_address_city"
                onChange={(e) => setRestaurantAddressCity(e.target.value)}
              />
            </div>
            <div class="form-col">
              <label>Restaurant City Pin-code</label>
              <input
                type="text"
                name="restaurant_address_pincode"
                onChange={(e) => setRestaurantAddressPincode(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div class="form-row">
            <div class="form-col">
              <label>Restaurant Phone</label>
              <input
                type="text"
                name="restaurant_phone"
                onChange={(e) => setRestaurantPhone(e.target.value)}
              />
            </div>
            <div class="form-col">
              <label>Restaurant Email</label>
              <input
                type="text"
                name="restaurant_email"
                onChange={(e) => setRestaurantEmail(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleSubmit}>Add food</button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodData;
