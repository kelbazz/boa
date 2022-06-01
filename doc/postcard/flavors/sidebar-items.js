initSidebarItems({"struct":[["Cobs","The `Cobs` flavor implements Consistent Overhead Byte Stuffing on the serialized data. The output of this flavor includes the termination/sentinel byte of `0x00`."],["Slice","The `Slice` flavor is a storage flavor, storing the serialized (or otherwise modified) bytes into a plain `[u8]` slice. The `Slice` flavor resolves into a sub-slice of the original slice buffer."]],"trait":[["SerFlavor","The SerFlavor trait acts as a combinator/middleware interface that can be used to pass bytes through storage or modification flavors. See the module level documentation for more information and examples."]]});