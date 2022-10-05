import React, { useState, useMemo, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import images from '../assets';


const CreateNFT = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const { theme } = useTheme();

    const onDrop = useCallback(() => {
    }, []);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxSize: 5000000,
    });

    const fileStyle = useMemo(() => (
        `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed ${isDragActive && 'border-file-active'} ${isDragAccept && 'border-file-accept'} ${isDragReject && 'border-file-reject'}`
    ), [isDragActive, isDragAccept, isDragReject]);

    return (
        <div className="flex justify-center sm:px-4 p-12">
            <div className="w-3/5 md:w-full">
                <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">Create new NFT</h1>
                <div className="mt-16">
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload File</p>
                </div>
                <div className="mt-4">
                    <div {...getRootProps()} className={fileStyle}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNFT;
