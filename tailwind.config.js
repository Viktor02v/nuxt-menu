/** @type {import('tailwindcss').Config} */
module.exports =  {
css:['~/assets/css/tailwind.css'],
theme: {
   extend: {
		colors:{
			background: "var(--background)",
			sidebarBg: "var(--sidebar-bg)",
			colorSidebar: "var(--hoverSideBar)"
		},
		fontSize:{
			base:"var(--base)",
		}
	},
},
plugins: [],
}

