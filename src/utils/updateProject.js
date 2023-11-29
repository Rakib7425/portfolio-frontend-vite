import { updateProjectByIdApiUrl } from "../apis/APIs";

const updateProject = async (projectId, formData) => {
	try {
		let headersList = {};

		let bodyContent = new FormData();

		bodyContent.append("title", "title");
		bodyContent.append("hostedLink", "hostedLink");
		bodyContent.append("gitHubLink", "gitHubLink");
		bodyContent.append("subject", "subject");
		bodyContent.append("description", "description");
		bodyContent.append("challenges", "challenges");
		bodyContent.append("technologies", "tags1,tags2,tags3,tags4,tags5");
		bodyContent.append("images", "c:UsersRsMDesktop\notImpDprofile.jpeg");
		bodyContent.append("images", "c:UsersRsMDesktop\notImpDphoto_2023-11-01_00-52-02.jpg");
		bodyContent.append("images", "c:UsersRsMDesktop\notImpDScreenshot 2023-11-25 175522.png");

		let response = await fetch(
			"http://localhost:8080/api/v1/projects/updateproject?id=65649db689532f67f1b9db9d",
			{
				method: "PATCH",
				body: bodyContent,
				headers: headersList,
			}
		);

		let data = await response.text();
		console.log(data);

		if (data.success) {
			return true;
		} else {
			return false;
		}

		//
	} catch (error) {
		console.log(error);
		return false;
	}
};

export { updateProject };
