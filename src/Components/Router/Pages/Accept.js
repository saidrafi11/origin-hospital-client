import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Accept = ({successAction}) => {
    
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
       
        accept: {
          'image/jpeg': [],
          'image/png': []
        }
      });
      console.log(acceptedFiles);

      

      const acceptedFileItems = acceptedFiles.map(file => (
        
        <li key={file.path}>
          {file.path} - {file.size} bytes
          
        </li>
      ));
    //   console.log(acceptedFileItems);

      const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => (
              <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      ));

     
    return (
        <div className="container ">
      <div {...getRootProps({ className: 'dropzone bg-white w-full rounded-lg my-5 p-5' })}>
        <input {...getInputProps()} />
        <p className='font-semibold text-green-900'>Drag 'n' drop some files here, or click to select files</p>
        <em className='font-semibold text-green-900'>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
      <button onClick={()=>successAction(acceptedFiles)} className='btn btn-accent mt-5 w-full' type="submit" value='Save'>Save</button>
    </div>
    );
};

export default Accept;