import Image from 'next/image';
import { Box } from '@mui/material';
import Description from '@/components/Description';
import RenderIf from '@/utils/RenderIf';
import useWindowSize from '@/utils/useWindowSize';
import { mediaQueriesThresholds } from '@/constants';


const Main = () => {
    const { width } = useWindowSize();
    return (
        <main>
        <RenderIf isTrue={width && width > mediaQueriesThresholds.mobile}>
            <Box sx={{ 
            width: '50vw',
            height: '100%', 
            position:'absolute',
            }}>
                <Image
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}computerworks.gif`}
                alt="background"
                fill
                style={{
                    objectFit: 'cover',
                    opacity: '0.7',
                }}
                />
            </Box>
        </RenderIf>
        <Description />
      </main>
    );
}

export default Main;