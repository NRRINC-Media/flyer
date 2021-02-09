#!/bin/bash
rm *flyer*.*tar.gz*
rm *flyer**-sha256*
echo "FlyerV: (ex: 1.3.1)"
read ver
tar -zcvf flyer-v$ver.tar.gz flyer demo.html
sha256sum flyer-$ver.tar.gz > flyer-$ver-sha256
echo "done"