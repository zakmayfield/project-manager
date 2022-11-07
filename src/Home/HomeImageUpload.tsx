import { Input, Box } from '@chakra-ui/react';
import { useState } from 'react';

function HomeImageUpload() {
  const [file, setFile] = useState(null);

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  function generateURL(file: any) {
    console.log(URL.createObjectURL(file));
  }

  return (
    <div>
      {file && <button onClick={() => generateURL(file)}>gen url</button>}

      <input
        type='file'
        accept='image/*'
        name='file-upload'
        onChange={(e) => imageChange(e)}
      />

      {file && (
        <div>
          <img src={URL.createObjectURL(file)} alt='' />
          <button onClick={() => setFile(null)}>Remove Image</button>
        </div>
      )}
    </div>
  );
}

export default HomeImageUpload;
