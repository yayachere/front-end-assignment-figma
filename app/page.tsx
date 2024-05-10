import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-16 lg:px-40 overflow-hidden">

     <Script id="show-sidebar">
        {`
        var openSideBar = document.querySelector('.sidebarOpenBtn');
        var closeSidebar = document.querySelector('.sidebarCloseBtn');
        var sideBar = document.querySelector('.nav-links');
        var textOverlay = document.querySelector('.text-overlay');
        var navBar = document.querySelector('.navbar');



        openSideBar.addEventListener('click', ()=> {
          sideBar.classList.add('nav-links-open');
          textOverlay.classList.remove('z-10');
          navBar.style.overflow = 'visible';
        });
        closeSidebar.addEventListener('click', ()=> {
            sideBar.classList.remove('nav-links-open');
            textOverlay.classList.add('z-10');
            navBar.style.overflow = 'hidden';
        });
        
        `}
      </Script>
      
      <div className="h-screen flex flex-col justify-center items-center inset-0">
          {/* Video Background */}
          <video
            className="absolute inset-0 z-0 object-cover object-fit h-full lg:h-auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/main-background-video.mp4" type="video/mp4" />
          </video>
          {/* Navigation */}
          <nav className="navbar absolute font-satoshibold top-2 left-0 right-0 flex justify-between items-center 
            md:p-4 z-10 md:px-4 z-20 lg:mx-6">
            {/* Logo */}
            <img src="/images/logo.png" alt="Logo" className="h-6" />
            {/* SideBar toggler for small screens */}
            <a href="#" className="sidebarOpenBtn text-white  p-2">
              <img src="/images/bars.svg" alt="bars icons" className="h-8" />
            </a>
            {/* Links */}
            <div className="nav-links flex md:space-x-12 lg:space-x-16">
              
                <a href="#" className="nav-link text-white sm:text-lg md:text-xs hover:text-gray-300 py-2">
                  <img src="/images/Creon Pass.png" className='h-3' />
                </a>
                <a href="#" className="nav-link text-white sm:text-lg md:text-xs lg:text-xs hover:text-gray-300 p-2">Token 
                  <span className="absolute bottom-8 md:bg-black mx-1 px-1 rounded-xl md:text-gray-300 px-2">soon</span>
                </a>
                <a href="#" className="nav-link text-white sm:text-lg md:text-xs lg:text-xs hover:text-gray-300 p-2">AI Revenue 
                  <span className="absolute bottom-8 md:bg-black mx-1 px-1 rounded-xl md:text-gray-300 px-2">soon</span>
                </a>
                <a href="#" className="nav-link text-white sm:text-lg md:text-xs lg:text-xs hover:text-gray-300 p-2">AI Launchpad 
                  <span className="absolute bottom-8 md:bg-black mx-1 px-1 rounded-xl md:text-gray-300 px-2">soon</span>
                </a>
                <div className="top">
                  <a href="#" className="nav-top-link text-white md:text-xs lg:text-xs hover:bg-blue-600
                   border border-2-white rounded py-2 px-4">Connect</a>
                  <a href="#" className="sidebarCloseBtn  p-2">
                    <img src="/images/close.svg" alt="bars icons" className="h-20" />
                  </a> 
                </div>
                <div className="bottom w-full flex flex-row justify-around">
                  <img src="/images/telegram.png" className="h-8" />
                  <img src="/images/discord.png" className="h-8" />
                  <img src="/images/twitter.png" className="h-8" />
                </div> 
              </div>
          </nav>
          {/* Text Content Overlay */}
          <div className="w-full relative z-10 text-white text-left pt-50 md:pt-60 lg:pe-32 text-overlay">
            <h1 className="font-monument text-3xl md:text-5xl mb-4 px-4 md:px-0 lg:pt-24">THE WORLD'S FIRST<br></br>
                PLATFORM FOR TOKENIZING<br></br>
                AI BLOCKCHAIN PROJECTS
            </h1>
            <p className="mx-4 md:mx-0 md:font-satoshibold sm:text-sm md:text-lg border-b border-white 
              border-t gradient-text gradient-border mt-4">
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </p>
          </div>
          {/* Gradient Overlay */}
          <div className="gradient-overlay"></div>

      </div>

      <div className="flex flex-col md:flex-row w-full justify-center bg-black lg:pt-10 z-0">
        <div className="md:w-1/2 px-8 md:px-0">
          {/* First column content */}
          <h2 className="font-monument text-3xl md:text-5xl py-6">CREON PASS <br></br>NFT</h2>
          <h3 className="font-satoshibold text-md gradient-text my-8">The Creon NFT pass unlocks access to AI projects, the Creon  <br></br>
            launchpad, and a ticket to generate passive income through AI- <br></br>
            driven tools.
          </h3>
          <p className="font-satoshiregular text-sm text-gray-400 my-2 py-2 box-sm-shadow">Pre-launch investment opportunities for upcoming AI projects.</p>
          <p className="font-satoshiregular text-sm text-gray-400 my-2 py-2 box-sm-shadow">Free and early access to Creon built AI projects.</p>
          <p className="font-satoshiregular text-sm text-gray-400 my-2 py-2 box-sm-shadow">Higher allocation limits on the Creon AI Launchpad.</p>
          <p className="font-satoshiregular text-sm text-gray-400 my-2 py-2 box-sm-shadow">Revenue share distribution from Creon built AI projects.</p>
          <button className="w-full md:w-2/3 font-satoshibold mt-4 gradient-bg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:mt-8">Buy Creon Pass</button>
        </div>
        <div className="md:w-1/2 pt-6 md:pt-0">
          {/* Second column content */}
          <video className="w-full md:object-cover md:h-full" autoPlay muted loop>
            <source src="/videos/nft-video.mp4" type="video/mp4" />
            {/* Add additional video sources for browser compatibility */}
          </video>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-full mt-24 mb-8">
          {/* Heading and subheading */}
          <h2 className="font-monument text-2xl md:text-5xl mb-4">PROFITING THROUGH</h2>
          <div className="flex justify-end items-center text-right">
            <h3 className="font-monument text-xl md:text-27 gradient-text lg:-me-8">AI INNOVATION & DECENTRALIZATION</h3>
            {/* Add space for alignment */}
            <div className="w-10"></div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row space-x-10 mt-10 justify-center items-center">
          <div className="md:w-2/3 mt-4 md:mt-0">
            {/* First subsection with video */}
            <video className="w-full" autoPlay muted loop>
              <source src="/videos/creon-logo.mp4" type="video/mp4" />
            </video>
          </div>     
          <div className="md:w-1/3 mt-4 md:mt-0 px-0 px-0 md:px-4 borer border-l border-r 
          border-gray-900">
            {/* Second subsection with text description */}
            <h3 className="font-satoshibold text-md mb-4">The dynamic community driven<br></br> business model of the future.</h3>
            <p className="font-satoshiregular text-xs text-gray-300">At Creon, we blend the power of AI tools with the<br></br> dynamic crypto and NFT markets, 
            utilizing an<br></br> innovative business model to drive profitability.<br></br> This approach empowers our community, 
            as our<br></br> NFT and token holders directly benefit from the<br></br> growth and prosperity of the Creon network,<br></br>
             creating a win-win scenario for both our<br></br> community and for the projects we launch.</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row w-full mt-24 mb-8">
        <div className="md:w-1/2 lg:w-3/5 py-10">
          {/* Heading and image */}
          <h2 className="font-monument text-xl md:text-28 mb-4 px-8 md:px-0 leading-tight lg:px-4">
            OUR VISION IS TO<br></br>SUPPORT THE INNOVATION<br></br>OF AI BLOCKCHAIN<br></br>
          PROJECTS <span className="gradient-text">WHILE<br></br> PRIORITIZING COMMUNITIES<br></br> AND DEMOCRATIZING
          <br></br> PROFITS</span></h2>
          <div className="flex flex-row">
            <div className="md:w-1/5"></div>
            <img src="/images/CREON 1.png" alt="Image" className="w-full md:w-4/5 lg:h-100 mb-4" />
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 lg:w-2/5 pl-0 lg:pl-8">
          {/* Accordion */}
          <div className="accordion">

            {/* Accordion item 1 (default open) */}
            <div className="accordion-item py-10">
              <h3 className="relative accordion-title font-satoshibold flex items-center text-md lg:text-base accordion-header">
                <img src="/images/icon.png" alt="Accordion Image 1" className="h-14 lg:h-20 mb-4 pr-4" />
                Profitability and<br></br>Growth
                <img src="/images/up-arrow.svg" alt="up-icon" className="absolute h-3 right-3 top-6"/>
              </h3>
              
              <div className="accordion-content font-satoshiregular lg:text-xs text-gray-300 me-0 lg:ml-0 pl-8 md:pl-0 lg:pl-24">
                {/* Accordion 1 content */}
                <p>At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and 
                  investment opportunities. Our community actively contributes to the growth and profitability of these projects,
                   creating a dynamic ecosystem of innovation and shared success..</p>
              </div>
            </div>

            {/* Accordion item 2 */}
            <div className="accordion-item pb-10">
              <h3 className="relative accordion-title font-satoshibold flex items-center text-md lg:text-base hover:text-blue-600
               cursor-pointer accordion-header">
                <img src="/images/icon (1).png" alt="Accordion Image 2" className="h-14 lg:h-20 mb-4 pr-4" />
                Transparent & Fair Decentralized <br></br>Earnings
                <img src="/images/down-arrow.svg" alt="down-icon" className="absolute h-3 right-3 top-6"/>
              </h3>
              <div className="accordion-content hidden font-satoshiregular lg:text-xs text-gray-300 me-0 lg:ml-0 pl-8 md:pl-0 lg:pl-24">
                {/* Accordion 2 content */}
                <p>At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and 
                  investment opportunities. Our community actively contributes to the growth and profitability of these projects,
                   creating a dynamic ecosystem of innovation and shared success..</p>
              </div>
            </div>

            {/* Accordion item 3 */}
            <div className="accordion-item pb-10">
              <h3 className="relative accordion-title font-satoshibold flex items-center text-md lg:text-base hover:text-blue-600
               cursor-pointer accordion-header">
                <img src="/images/icon (2).png" alt="Accordion Image 3" className="h-14 lg:h-20 mb-4 pr-4" />
                Launching the <br></br>future
                <img src="/images/down-arrow.svg" alt="down-icon" className="absolute h-3 right-3 top-6"/>
              </h3>
              <div className="accordion-content hidden font-satoshiregular lg:text-xs text-gray-300 me-0 lg:ml-0 pl-8 md:pl-0 lg:pl-24">
                {/* Accordion 3 content */}
                <p>At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and 
                  investment opportunities. Our community actively contributes to the growth and profitability of these projects,
                   creating a dynamic ecosystem of innovation and shared success..</p>
              </div>
            </div>
            
            {/* Accordion item 4 */}
            <div className="accordion-item pb-10">
              <h3 className="relative accordion-title font-satoshibold flex items-center text-md lg:text-base hover:text-blue-600
               cursor-pointer accordion-header">
                <img src="/images/icon (3).png" alt="Accordion Image 4" className="h-14 lg:h-20 mb-4 pr-4" />
                Limitless Possibilities of AI<br></br>& CryptoGrowth            
                <img src="/images/down-arrow.svg" alt="down-icon" className="absolute h-3 right-3 top-6"/>
              </h3>
              <div className="accordion-content hidden font-satoshiregular lg:text-xs text-gray-300 me-0 lg:ml-0 pl-8 md:pl-0 lg:pl-24">
                {/* Accordion 4 content */}
                <p>At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and 
                  investment opportunities. Our community actively contributes to the growth and profitability of these projects,
                   creating a dynamic ecosystem of innovation and shared success..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-8 px-4 lg:px-0">
        {/* Card 1 */}
        <div className="p-4 relative image-scale">
          <span className="absolute font-satoshibold text-xs top-0 right-0 bg-white text-black rounded-lg px-2 mr-10">coming soon</span>
          <div className="bg-gray-900 rounded-lg shadow-lg">
            <div className="">
              <h3 className="font-monument text-2xl mb-2 pt-4 px-4">TOKEN</h3>
              <h4 className="font-satoshibold text-md mb-2 w-full px-4 gradient-text pb-6">The Gateway token to the world of AI</h4>
              <div className="overflow-hidden mr-4">
              <img src="/images/card1.png" alt="Card Image 1" className="rounded-e-lg" />
              </div>
              <p className="font-satoshiregular text-gray-300 w-full flex justify-center text-xs px-4 mt-5 pb-12">Set to debut in the latter half of 2024, the CREON token serves as the pioneering link 
              between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with
              unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects..</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 relative image-scale">
          <span className="absolute font-satoshibold text-xs top-0 right-0 bg-white text-black rounded-lg px-2 mr-10">coming soon</span>
          <div className="bg-gray-900 rounded-lg shadow-lg">
            <div className="">
              <h3 className="font-monument text-2xl mb-2 pt-4 px-4">REVENUE</h3>
              <h4 className="font-satoshibold text-md mb-2 w-full px-4 gradient-text">
                Driving income and growth through decentralization
              </h4>
              <div className="overflow-hidden mr-4">
              <img src="/images/card3.png" alt="Card Image 1" className="rounded-e-lg" />
              </div>
              <p className="font-satoshiregular text-gray-300 w-full flex justify-center text-xs px-4 mt-5 pb-12">CREON NFT and token holders are integral
              participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, 
              ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-4 relative image-scale">
          <span className="absolute font-satoshibold text-xs top-0 right-0 bg-white text-black rounded-lg px-2 mr-10">coming soon</span>
          <div className="bg-gray-900 rounded-lg shadow-lg">
            <div className="">
              <h3 className="font-monument text-2xl mb-2 pt-4 px-4">LAUNCHPAD</h3>
              <h4 className="font-satoshibold text-md mb-2 w-full px-4 gradient-text pb-5">Driving the future of AI Innovation</h4>
              <div className="overflow-hidden mr-4">
              <img src="/images/card2.png" alt="Card Image 1" className="rounded-e-lg hover:rounded-e-lg" />
              </div>
              <p className="font-satoshiregular text-gray-300 w-full flex justify-center text-xs px-4 pb-4 mt-5 pb-9">The Creon AI Launchpad, an essential 
              component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the 
              first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token 
              holders early access to innovative and promising AI endeavors.</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="w-screen flex flex-col mt-16 relative justify-center items-center">
        {/* Video Background */}
        <video
            className="absolute inset-0 z-0 object-cover h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/roadmap-video.mp4" type="video/mp4" />
          </video>
        <div className="w-5/6 relative z-10 text-white px-0 lg:px-16">
          {/* Description Box 1 */}
          <div className="w-full shadow-lg mt-4 half-transparent">
            <div className="md:flex">
              {/* First column (3/4 width) */}
              <div className="md:w-3/4 p-6 lg:px-8">
                <h3 className="font-monument text-lg lg:text-29 mb-2">AI PROSPECTS, MARKET SIZE, AND<br></br> DEVELOPMENT PACE</h3>
                <p className="font-satoshiregular text-gray-400 text-sm">The AI market is one of the most dynamically growing areas of technology. According to 
                reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate)
                of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data
                  analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and 
                  transportation..</p>
              </div>
              {/* Second column (1/4 width) */}
              <div className="md:w-1/4">
                <img src="/images/footer1.png" alt="Box 1 Image" className="w-full lg:h-full" />
              </div>
            </div>
          </div>
          {/* Description Box 2 */}
          <div className="w-full shadow-lg mt-4 half-transparent">
            <div className="md:flex">
              {/* First column (3/4 width) */}
              <div className="md:w-3/4 p-6 lg:px-8">
                <h3 className="font-monument text-lg lg:text-29 mb-2">AI TOOLS AND MARKET</h3>
                <p className="font-satoshiregular text-gray-400 text-sm">AI tools refer to the technologies and software that enable computer systems to perform 
                tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such 
                as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of 
                applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail,
                manufacturing, and many others.</p>
              </div>
              {/* Second column (1/4 width) */}
              <div className="md:w-1/4">
                <img src="/images/footer2.png" alt="Box 2 Image" className="w-full lg:h-full" />
              </div>
            </div>
          </div>
          {/* Description Box 3 */}
          <div className="w-full mt-4 half-transparent">
            <div className="md:flex">
              {/* First column (3/4 width) */}
              <div className="md:w-3/4 p-6 lg:px-8">
                <h3 className="font-monument text-lg lg:text-29 mb-2">AI, CRYPTO, AND NFT MARKET</h3>
                <p className="font-satoshiregular text-gray-400 text-sm">Artificial Intelligence and blockchain technology are two groundbreaking areas leading new
                technological innovations. The combination of these two technologies creates intriguing possibilities. For instance,
                  Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based 
                  services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency,
                  and service personalization. Such combination brings substantial benefits for both developers and users, paving 
                  the way for unprecedented possibilities.</p>
              </div>
              {/* Second column (1/4 width) */}
              <div className="md:w-1/4">
                <img src="/images/footer3.png" alt="Box 3 Image" className="w-full lg:h-full" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center relative mt-16 pb-16">
            <div className="md:w-1/3">
              <p className="font-satoshiregular">© Creon 2023. All rights reserved.</p>
            </div>
            <div className="hidden md:w-1/3 md:flex space-x-4">
              <img src="/images/telegram.png" width={30} />
              <img src="/images/discord.png" width={30} />
              <img src="/images/twitter.png" width={30} />
            </div>
            <div className="flex md:w-1/3 space-x-2 justify-end items-center pt-4 md:pt-0">
              <p className="font-satoshiregular">Powered by</p>
              <img src="/images/niftables.png" className='h-4' />
            </div>
          </div>
        </div>
        {/* transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0 pointer-events-none"></div>
      </div>
    </main>
    
  );
}
