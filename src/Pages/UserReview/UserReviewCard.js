import React from 'react';

const UserReviewCard = ({ review }) => {
    const { customer, reviewerPhotoURL, email, reviewtext, foodId, foodName, _id } = review;
    return (
        <div className="relative group hover:bg-yellow-100 transition hover:z-[1] hover:shadow-2xl">
            <div className="w-full h-full relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:border group-hover:scale-90 flex flex-col justify-start">
                {/* <img src={reviewerPhotoURL ? reviewerPhotoURL : user} className="w-12 h-12 rounded-full" alt="User" /> */}

                <div className="space-y-2">
                    <h5 className="text-xl text-red-600 font-bold transition  group-hover:text-red-600   feature-title"> <span className='text-white text-sm group-hover:text-black '>Reviewer:</span> {customer}</h5>
                    <h5 className="text-sm  text-yellow-600  font-bold transition  group-hover:text-red-600 feature-title"><span className='text-white text-sm  group-hover:text-black '>Reviewer email:</span>  {email}</h5>
                    <p className="text-md font-bold pt-3 text-yellow-600 feature-description   group-hover:text-red-600 ">"{reviewtext}"</p>
                </div>
                {/* <div className="flex justify-between items-center group-hover:text-yellow-600">
                    <span className="text-sm">{addedDate.split(",")}</span>
                    <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <Rating
                            placeholderRating={ratings}
                            readonly={true}
                            emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                            placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                            fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                        />
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default UserReviewCard;