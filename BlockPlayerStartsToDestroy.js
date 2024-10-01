package net.mcreator.cz.procedures;

import net.minecraft.world.IWorld;
import net.minecraft.util.math.BlockPos;
import net.minecraft.block.Blocks;

import net.mcreator.cz.CzMod;

import java.util.Map;

public class MagicznaRudaPlayerStartsToDestroyProcedure {
     public static double x, y, z;
     public static IWorld world;
	public static void executeProcedure(Map<String, Object> dependencies) {
		if (dependencies.get("x") == null) {
			if (!dependencies.containsKey("x"))
				CzMod.LOGGER.warn("Failed to load dependency x for procedure MagicznaRudaPlayerStartsToDestroy!");
			return;
		}
		if (dependencies.get("y") == null) {
			if (!dependencies.containsKey("y"))
				CzMod.LOGGER.warn("Failed to load dependency y for procedure MagicznaRudaPlayerStartsToDestroy!");
			return;
		}
		if (dependencies.get("z") == null) {
			if (!dependencies.containsKey("z"))
				CzMod.LOGGER.warn("Failed to load dependency z for procedure MagicznaRudaPlayerStartsToDestroy!");
			return;
		}
		if (dependencies.get("world") == null) {
			if (!dependencies.containsKey("world"))
				CzMod.LOGGER.warn("Failed to load dependency world for procedure MagicznaRudaPlayerStartsToDestroy!");
			return;
		}
		 x = dependencies.get("x") instanceof Integer ? (int) dependencies.get("x") : (double) dependencies.get("x");
		 y = dependencies.get("y") instanceof Integer ? (int) dependencies.get("y") : (double) dependencies.get("y");
	     z = dependencies.get("z") instanceof Integer ? (int) dependencies.get("z") : (double) dependencies.get("z");
		world = (IWorld) dependencies.get("world");
		world.setBlockState(new BlockPos((int) x, (int) y, (int) z), Blocks.AIR.getDefaultState(), 3);
		public static void makeGravel() {
			int i, j, k;
			for (i = (int) x - 4; i < (int) x + 5; i++) {
				for (j = (int) y - 4; j < (int) y + 5; j++) {
					for (k = (int) z - 4; k < (int) z + 5; k++) {
						if (((world.getBlockState(new BlockPos((int)i, (int)j, (int)k))).getBlock() == MagicznaRudaBlock.block)) {
							world.setBlockState(new BlockPos((int)i, (int)j, (int)k, MagicznaRudaBlock.block.getDefaultState(), 3));
						} else if (((world.getBlockState(new BlockPos((int)i, (int)j, (int)k))).getBlock() != Block.AIR)) {
							world.setBlockState(new BlockPos((int)i, (int)j, (int)k),Block.GRAVEL.getDefaultState(). 3);
						}
					}
				}
			} 
		} 
		if (((world.getBlockState(new BlockPos(x, y - 1, z))).getBlock() == Blocks.STONE)) {
			makeGravel();
		}
		else if ((world.getBlockState(new BlockPos(x, y - 1, z))).getBlock() == Blocks.GRASS_BLOCK) {
			makeTrees();
		}
		public static void makeTrees() {
			int X, Y, Z;
			for (int index = 0; index < 10; index++) {
				X = randomPosition();
				Z = randomPosition();
				Y = (int)(world.getHeight(Heightmap.Type.MOTION_BLOCKING_NO_LEAVES,(int)x, (int)z));
				if (Math.abs(Y - y) < 5) {
					world.setBlockState(new BlockPos((int)x + X, Y, (int)z + Z), Block.OAK_SAPLING.getDefaultState(), 3);
					for(int index2 = 0; index2 < 10; index2++){
						BoneMealItem.applyBonemeal(new ItemStack(Items.BONE_MEAL), (World) world,
                        new BlockPos((int)x, (int)y, (int)z))

					}
				}
			}
		}
		public static int randomPosition() {
			int random = (int) (Math.random() * 10);
			int isMinus = (int) (Math.random() * 2);
			if(isMinusinus == 1){
				random = random + (-1);
			}
			return random;
		}
	}
}
