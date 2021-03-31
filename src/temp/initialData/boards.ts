import { IBoard } from "types/interfaces/Board";

import { columns } from "./columns";

export const boards: Array<IBoard> = [
	{
		id: "1",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		columns,
		url_image:
			"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelbylesley.co.uk%2Fwp-content%2Fuploads%2F2019%2F04%2Fbigstock-Beautiful-tropical-beach-with-68649619-Copy.jpg&f=1&nofb=1",
	},
	{
		id: "2",
		title: "Front End - Techmmunity",
		columns,
		url_image:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.prntscr.com%2Fimage%2Fc3LqtwMtReGUiQkdKYIEsg.jpg&f=1&nofb=1",
	},
	{
		id: "3",
		title: "Soluções Integradas Tech Team",
		columns,
		url_image:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallhdwallpapers.com%2Fwp-content%2Fuploads%2F2015%2F05%2FBeach-8.jpg&f=1&nofb=1",
	},
];
