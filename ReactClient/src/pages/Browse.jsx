import { useState } from "react"; //this isn't used yet but will be needed once post can actually be made

function Browse() {
  // fake charity post to show what it should look like
  const charityPosts = [ //this creates 2 diff objects to represent post, it has an ID, photo etc stuff that each post should include. the ID is used as the key for the map() function 
    {
      _id: "1", //unique ID for each of the post
      photo:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?cs=srgb&dl=pexels-rdne-6646918.jpg&fm=jpg",
      title: "Lunchroom Volunteer",
      category: "Food",
      summary:
        "Help out the lunch team at local schools",
    },
    {
      _id: "2", //another ID
      photo:
        "https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=612x612&w=0&k=20&c=9AL8Uj9TTtrbHpM78kMp9fqjT_8EqpEekjdixeKUzDw=",
      title: "Volunteer to help sort donated goods",
      category: "Donation",
      summary: "Help manage donations given by local sponsors", //this text can overflow fix that later
    },
    {
      _id: "3", //another ID
      photo:
        "https://media.istockphoto.com/id/1372606308/photo/volunteers-arranging-donations-in-a-community-charity-donation-center.jpg?s=612x612&w=0&k=20&c=A3d1e79jYoJMDJPXJf-9wzFknpP3x8lmWfuffZ8cB1Y=",
      title: "Food Drive Volunteers",
      category: "Food",
      summary: "Help with the Virginia state food drive as a volunteer", //this text can overflow fix that later
    },
    
  ];

  //in this below section the map() function loops over each item in the charityPosts array and for each one it goes over it returns a new div that represents the post


  return (
    <div className="flex flex-col min-h-screen p-20 bg-brand-beige">
      

      <div className="space-y-6">
        {charityPosts.map((post) => (
          <div
            key={post._id}
            className="flex bg-brand-offWhite rounded-lg shadow-lg p-8"
          >
            <div className="w-1/3">
              <img
                src={post.photo}
                alt={post.title}
                className="w-1/2 h-auto rounded-lg hover:scale-105 transition-transform"
              />
            </div>

            <div className="w-2/3 pl-6">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.category}</p>
              <p className="text-sm">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
