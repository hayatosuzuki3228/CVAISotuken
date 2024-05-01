
import React from 'react';
import { Stack, Button } from '@mui/material';
export function Matching() {
  return(
    <dev>
       <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <Button onClick={() => window.location.href = 'http://abehiroshi.la.coocan.jp/'} variant="contained" color="primary">求人票</Button>
      <Button onClick={() => window.location.href = 'http://abehiroshi.la.coocan.jp/'} variant="contained" color="secondary">企業検索</Button>
    </Stack>
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <Button onClick={() => window.location.href = 'http://abehiroshi.la.coocan.jp/'} variant="contained" color="secondary">会社名と事業内容一覧表</Button>
      <Button onClick={() => window.location.href = 'http://abehiroshi.la.coocan.jp/'} variant="contained" color="success">マッチ度一覧表</Button>
    </Stack>

     </dev>
           
  );

}
