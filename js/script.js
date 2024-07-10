//* Fetch data

const fetchData = async (id = '1000') => {
    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await response.json();
    displayUsers(data);
};
fetchData();

//* Display Users

const displayUsers = (data) => {
    const parentElement = document.getElementById('parent-element');
    parentElement.textContent = '';

    if (data.status === false) {
        const displayError = document.createElement('div');
        displayError.innerHTML = `
            <div class="mx-auto text-center ">
                <img src="./image/Icon.png" alt="icon" />
                <h3 class="text-3xl font-bold">
                    Oops!! Sorry, There is no content here
                </h3>
            </div>
        `;
        parentElement.appendChild(displayError);
    }

    const users = data.data;

    users.forEach((user) => {
        const createChild = document.createElement('div');
        createChild.innerHTML = `

        <div class="card bg-base-100 shadow-xl pb-2">
                    <figure>
                        <img src=${user?.thumbnail} alt="Shoes" class="w-full h-52" />
                    </figure>

                    <div class="flex mt-5 gap-3">
                        <div>
                            <img src=${user?.authors[0]?.profile_picture} alt="profile" class="w-10 h-10 rounded-full" />
                        </div>

                        <div class="space-y-2">
                            <h2 class="text-base font-bold">${user.title}</h2>
                            <p class="text-base text-[#171717b3]">
                                ${user?.authors[0]?.profile_name}
                            </p>
                            <p class="text-base text-[#171717b3]">${user?.others?.views}</p>
                        </div>
                    </div>
                </div>
        
        `;

        parentElement.appendChild(createChild);
    });
};

//* All users data
const allUsersData = () => {
    fetchData('1000');
};

//* Music catagories data
const musicCatagoriesData = () => {
    fetchData('1001');
};

//* Comedy catagories data
const comedyCatagoriesData = () => {
    fetchData('1003');
};

//* Drawing catagories data
const drawingCatagoriesData = () => {
    fetchData('1005');
};
