import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () =>{
  return(
    <section
    	id = "home"
		className="min-h-screen flex items-center justify-center relative"
	>

	<RevealOnScroll>
		<div className="text-center z-10 px-4">
			<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent leading-right">
				Hello, I am Joyson
			</h1>
			<p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
			I'm a developer passionate about building scalable workflows that minimize administrative tasks, enhance user convenience across devices, and, most importantly, 
			eliminate repetitive and unnecessary work to save time.
			</p>
			<div className="flex justify-center space-x-4">
				<a href="#projects"
				className="bg-red-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
				view projects
				</a>
				<a href="#contact"
				className="bg-red-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
					contact me
				</a>
			</div>
		</div>
	</RevealOnScroll>
    </section>
  );
};
