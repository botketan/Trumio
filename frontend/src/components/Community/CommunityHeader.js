import React from 'react';

const CommunityHeader = ({ communityName }) => {
  return (
    <div className="relative w-[55vw] h-48 bg-cover bg-center text-black" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/9a69/5615/9fe9c36a69a74730e3ab7776868e45cb?Expires=1702857600&Signature=hpsc4MBIdWkxw-XoT66jmDg2LjFpuEM5lCAu7n0g6OSj2raG9zGrlQstEsrIlC4b~XWqUZBAh-UFehlQ13nxguSU4Rpu6uWH~eb5d7fHfJmYTeC0WqeDUZk50HRF3YPlQ4BzuHQBtvtzaNVQzhmB1zktx-kv5HX6zWAjoIh8qTUusqe9~S5AzEpzERNu~Qlw7S9w0gD2wVIUJHhR2Xx5oB~TrHq-wkjIY23-BpnqRFZoUFUCXHtcB67Du6jlHASXEiDeRajRk-VMVpcGNS4wAQQXF49k5Q-cfw4pw1AFhX9CdMb8AUPFV81SJYQCmSaesvkvCMPca73N2N49vn4ddQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent "></div>
      <h1 className="absolute mt-24 ml-10 p-5 text-4xl font-bold text-black opacity-70">{communityName}</h1>
    </div>
  );
};

export default CommunityHeader;